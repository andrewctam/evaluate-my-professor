import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Review } from "../reviews/reviewsSlice";
import {
  AddReviewPayload,
  CommentPayload,
  DeleteReviewPayload,
  LoginRegisterPayload,
  LoginRegisterResponse,
  VotePayload,
} from "./types";

const baseUrl = import.meta.env.DEV
  ? import.meta.env.VITE_DEV_API_URL
  : import.meta.env.VITE_PROD_API_URL;

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getReviews: builder.query<Review[], void>({
      query: () => "/reviews/all",
    }),
    login: builder.mutation<LoginRegisterResponse, LoginRegisterPayload>({
      query: (body) => ({
        url: "/users/login",
        method: "POST",
        body,
      }),
    }),
    register: builder.mutation<LoginRegisterResponse, LoginRegisterPayload>({
      query: (body) => ({
        url: "/users/register",
        method: "POST",
        body,
      }),
    }),
    addReview: builder.mutation<string, AddReviewPayload>({
      query: (body) => ({
        url: "/reviews/create",
        method: "POST",
        body,
      }),
    }),
    addComment: builder.mutation<string, CommentPayload>({
      query: (body) => ({
        url: "/reviews/comment",
        method: "POST",
        body,
      }),
    }),
    addVote: builder.mutation<string, VotePayload>({
      query: (body) => ({
        url: "/reviews/vote",
        method: "POST",
        body,
      }),
    }),
    deleteReview: builder.mutation<string, DeleteReviewPayload>({
      query: (body) => ({
        url: "/reviews/delete",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useGetReviewsQuery,
  useLoginMutation,
  useAddReviewMutation,
  useRegisterMutation,
  useAddCommentMutation,
  useAddVoteMutation,
  useDeleteReviewMutation,
} = apiSlice;
