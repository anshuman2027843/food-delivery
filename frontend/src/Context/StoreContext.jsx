import { createContext, useEffect, useState } from "react";
import { food_list, menu_list } from "../assets/assets";
import axios from "axios";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const url = import.meta.env.VITE_BACKEND_URL || "http://localhost:4000";
    const [food_list, setFoodList] = useState([]);
    const [cartItems, setCartItems] = useState({});
    const [token, setToken] = useState("")
    const currency = "₹";
    const deliveryCharge = 50;

    const addToCart = async (itemId) => {
        if (!itemId) return;
        setCartItems((prev) => {
            const currentCount = prev && prev[itemId] ? prev[itemId] : 0;
            return { ...prev, [itemId]: currentCount + 1 };
        });
        if (token) {
            try {
                await axios.post(url + "/api/cart/add", { itemId }, { headers: { token } });
            } catch (err) {
                console.error("Failed to sync cart add with backend:", err);
            }
        }
    }

    const removeFromCart = async (itemId) => {
        if (!itemId) return;
        setCartItems((prev) => {
            const currentCount = prev && prev[itemId] ? prev[itemId] : 0;
            if (currentCount <= 1) {
                const updated = { ...prev };
                delete updated[itemId];
                return updated;
            }
            return { ...prev, [itemId]: currentCount - 1 };
        });
        if (token) {
            try {
                await axios.post(url + "/api/cart/remove", { itemId }, { headers: { token } });
            } catch (err) {
                console.error("Failed to sync cart remove with backend:", err);
            }
        }
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        if (!cartItems || typeof cartItems !== 'object') return 0;
        if (!food_list || !Array.isArray(food_list)) return 0;
        for (const item in cartItems) {
            try {
                if (cartItems[item] > 0) {
                    let itemInfo = food_list.find((product) => String(product._id) === String(item));
                    if (itemInfo && itemInfo.price) {
                        totalAmount += itemInfo.price * cartItems[item];
                    }
                }  
            } catch (error) {
                console.error("Error calculating cart item amount:", error);
            }
        }
        return totalAmount;
    }

    const fetchFoodList = async () => {
        try {
            const response = await axios.get(url + "/api/food/list");
            if (response.data && response.data.success && Array.isArray(response.data.data)) {
                setFoodList(response.data.data);
            }
        } catch (error) {
            console.error("Failed to fetch food list:", error);
        }
    }

    const loadCartData = async (tokenHeaders) => {
        try {
            const response = await axios.post(url + "/api/cart/get", {}, { headers: tokenHeaders });
            if (response.data && response.data.cartData && typeof response.data.cartData === 'object') {
                setCartItems(response.data.cartData);
            }
        } catch (error) {
            console.error("Failed to load cart data:", error);
        }
    }

    useEffect(() => {
        async function loadData() {
            await fetchFoodList();
            const storedToken = localStorage.getItem("token");
            if (storedToken) {
                setToken(storedToken);
                await loadCartData({ token: storedToken });
            }
        }
        loadData();
    }, [])

    const [searchQuery, setSearchQuery] = useState("");

    const contextValue = {
        url,
        food_list,
        menu_list,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        token,
        setToken,
        loadCartData,
        setCartItems,
        currency,
        deliveryCharge,
        searchQuery,
        setSearchQuery
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )

}

export default StoreContextProvider;