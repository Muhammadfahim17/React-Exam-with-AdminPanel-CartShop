import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import EditProduct from './../../app/pages/protected/edit/edit';

export const userApi = createApi({
    reducerPath : "apiusers",
    baseQuery : fetchBaseQuery({baseUrl : "https://store-api.softclub.tj/", prepareHeaders : (headers) => {
        let token = localStorage.getItem('token');
        if (token) headers.set('Authorization', `Bearer ${token}`);
        return headers
    }}),
    endpoints : (builder) => ({
        getProducts : builder.query({
            query : () => "Product/get-products"
        }),
        getColor : builder.query({
            query : () => "Color/get-colors"
        }),
        loginAdmin : builder.mutation({
            query : (userData) => ({
                url : 'Account/login',
                method : 'POST',
                body  : userData
            })
        }),
        getBrends : builder.query({
            query : () => "Brand/get-brands"
        }),
        getSubCategory : builder.query({
            query : () => "SubCategory/get-sub-category"
        }),
        addProducts : builder.mutation({
            query : (newProduct) => ({
                url : "Product/add-product",
                method : 'POST',
                body : newProduct,
                
            })
        }),
        getCategories : builder.query({
            query : () => "Category/get-categories"
        }),
        deleteCategories : builder.mutation({
            query : (id) => ({
                url : `Category/delete-category?id=${id}`,
                method : 'DELETE'
            })
        }),
        addCategory : builder.mutation({
            query : (addNewCategory) => ({
                url : "Category/add-category",
                method : 'POST',
                body : addNewCategory
            })
        }),
        editCategory : builder.mutation({
            query : (editNewCategory) => ({
                url : 'Category/update-category',
                method : 'PUT',
                body : editNewCategory
            })
        }),
        deleteProducts : builder.mutation({
            query :(id) => ({
                url : `Product/delete-product?id=${id}`,
                method : 'DELETE'
            })
        }),
        getBrands : builder.query({
            query : () => "Brand/get-brands"
        }),
        addBrands : builder.mutation({
            query : (addNewBrand) => ({
                url : `Brand/add-brand?BrandName=${addNewBrand}`,
                method : 'POST',
                body : addNewBrand
            }) 
        }),
        deleteBrands : builder.mutation({
            query : (id) => ({
                url : `Brand/delete-brand?id=${id}`,
                method : "DELETE"
            })
        }),
        addSubCategory : builder.mutation({
            query : ({CategoryId ,SubCategoryName}) => ({
                url : `SubCategory/add-sub-category?CategoryId=${CategoryId}&SubCategoryName=${SubCategoryName}`,
                method : 'POST',
                body : {CategoryId,SubCategoryName}
            })
        }),
        deleteSubCategory : builder.mutation({
            query : (id) => ({
                url : `SubCategory/delete-sub-category?id=${id}`,
                method : 'DELETE'
            })
        }),
        editBrand : builder.mutation({
            query : (data) => ({
                url : `Brand/update-brand?Id=${data.id}&BrandName=${data.name}`,
                method : 'PUT',
                // body : data
            })
        }),
        editSubCategory : builder.mutation({
            query : ({Id,CategoryId,SubCategoryName}) => ({
                url : "SubCategory/update-sub-category?Id=520&CategoryId=240&SubCategoryName=Laptop",
                method : 'PUT',
                body : {Id,CategoryId,SubCategoryName}
            })
        }),
        getProductById : builder.query({
            query : (id) => `Product/get-product-by-id?id=${id}`
        }),
        editProduct : builder.mutation({
            query : ({Id,BrandId ,ColorId ,ProductName ,Description ,Quantity ,Weight,Size,Code ,Price ,HasDiscount ,DiscountPrice,SubCategoryId }) => ({
                url : `Product/update-product?Id=${Id}&BrandId=${BrandId}&ColorId=${ColorId}&ProductName=${ProductName}&Description=${Description}&Quantity=${Quantity}&Weight=${Weight}&Size=${Size}&Code=${Code}&Price=${Price}&HasDiscount=${HasDiscount}&DiscountPrice=${DiscountPrice}&SubCategoryId=${SubCategoryId}`,
                method : 'PUT',
                body : {Id,BrandId,ColorId,ProductName,Description,Quantity,Weight,Size,Code,Price,HasDiscount,DiscountPrice,SubCategoryId}
            })
        })
    }),
    
})


export const {useLoginMutation, 
useGetProductsQuery, 
useGetColorQuery, 
useLoginAdminMutation , 
useGetBrendsQuery, 
useGetSubCategoryQuery, 
useAddProductsMutation, 
useGetCategoriesQuery, 
useDeleteCategoriesMutation, 
useAddCategoryMutation, 
useEditCategoryMutation, 
useDeleteProductsMutation, 
useGetBrandsQuery, 
useAddBrandsMutation, 
useDeleteBrandsMutation, 
useAddSubCategoryMutation, 
useDeleteSubCategoryMutation, 
useEditBrandMutation, 
useEditSubCategoryMutation,
useGetProductByIdQuery,
useEditProductMutation} = userApi