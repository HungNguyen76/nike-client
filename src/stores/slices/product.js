import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "@api";

const findProductById = createAsyncThunk("/findProductById", async (id) => {
    let result = await api.products.findProductById(id);
    return result.data;
});

const findByCategoryId = createAsyncThunk("/findByCategory", async (category_id) => {
    let result = await api.categories.findByCategory(category_id);
    return result.data;
});


const findAllProducts = createAsyncThunk(
    "find_all_products",
    async () => {
        let result = await api.products.findAllProducts();
        return result.data;
    }
)

const productSlice = createSlice({
    name: "product",
    initialState: {
        loading: true,
        data: null
    },
    reducers: {
        addProduct: (state, action) => {
            state.data.unshift(action.payload);
        },
        addProducts: (state, action) => {
            state.data = [...action.payload];
        },
    },
    extraReducers: (builder) => {
        // find product by Id
        builder.addCase(findProductById.fulfilled, (state, action) => {
            state.data = { ...action.payload.data };
        });
        // find all products
        builder.addCase(findAllProducts.fulfilled, (state, action) => {
            state.data = [...action.payload.data]
        });
        // find products by category
        builder.addCase(findByCategoryId.fulfilled, (state, action) => {
            state.data = [...action.payload.data]
        });
        builder.addMatcher(
            (action) => {
                if (action.meta) {
                    return action;
                }
            },
            (state, action) => {
                if (action.meta) {
                    if (action.meta.requestStatus == "pending") {
                        //console.log("đã vào pending của api: ", action.type)
                        // if (action.type == "deleteUserByid/pending") {
                        //     console.log("trường hợp pending của api delete")
                        // }
                        state.loading = true;
                    }
                    if (action.meta.requestStatus == "rejected") {
                        //console.log("đã vào rejected của api: ", action.type)
                        state.loading = false;
                    }
                    if (action.meta.requestStatus == "fulfilled") {
                        //console.log("đã vào fulfilled của api: ", action.type)
                        state.loading = false;
                    }
                }
            },
        );
    }
})

export const productActions = {
    ...productSlice.actions,
    findProductById,
    findAllProducts,
    findByCategoryId
}

export const productReducer = productSlice.reducer;