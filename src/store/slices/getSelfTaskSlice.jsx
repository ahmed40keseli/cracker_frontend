import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api's/api";

export const getIdTaskData = createAsyncThunk(
  "form/getIdTaskData",
  async (thunkAPI) => {
    try {
      const tokenData = sessionStorage.getItem("authorization");
      // console.log(sessionStorage.getItem("authorization"));

      // const response = await API.get("/getTasks", formData, {
      //   headers: {
      //     token: `${token}`,
      //   },
      // });
      const response = await API.get("/getTasks", {
        headers: {
          authorization: `Bearer ${tokenData}`,
          "Content-Type": "application/json",
        },
      });
      console.log("API Yanıtı:", response.data);
      return response.data;
    } catch (error) {
      console.log("Error oluştu:", error.message);
      console.log("Error detayları:", error.response);
      return thunkAPI.rejectWithValue(
        error.response?.data || "Bir hata oluştu"
      );
    }
  }
);

const formSelfTaskSlice = createSlice({
  name: "form",
  initialState: {
    tasks: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getIdTaskData.pending, (state) => {
        state.status = "loading";
      })
      // .addCase(getIdTaskData.fulfilled, (state, action) => {
      //   state.status = "succeeded";
      //   state.tasks = Array.isArray(action.payload) ? action.payload : [];
      //   state.error = null;
      // })
      .addCase(getIdTaskData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.tasks = Array.isArray(action.payload.tasks)
          ? action.payload.tasks
          : []; // "tasks" özelliğine eriş
        state.error = null;
      })
      .addCase(getIdTaskData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default formSelfTaskSlice.reducer;

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import API from "../../api's/api";

// export const getIdTaskData = createAsyncThunk(
//   "form/getIdTaskData",
//   async (_, thunkAPI) => {
//     try {
//       const token = sessionStorage.getItem("token");

//       if (!token) {
//         throw new Error("No token found");
//       }
//       console.log("İstek öncesi token:", token);

//       const response = await API.get(
//         "/getTasks",
//         {},
//         {
//           headers: {
//             // token: `${token}`,
//             token: token,
//           },
//         }
//       );
//       console.log("API Yanıtı:", response.data);
//       return response.data;
//     } catch (error) {
//       console.log("Error oluştu:", error.message);
//       console.log("Error detayları:", error.response);
//       return thunkAPI.rejectWithValue(
//         error.response?.data || "Bir hata oluştu"
//       );
//     }
//   }
// );

// const formSelfTaskSlice = createSlice({
//   name: "form",
//   initialState: {
//     tasks: [],
//     status: "idle",
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(getIdTaskData.pending, (state) => {
//         state.status = "loading";
//       })
//       // .addCase(getIdTaskData.fulfilled, (state, action) => {
//       //   state.status = "succeeded";
//       //   state.tasks = Array.isArray(action.payload) ? action.payload : [];
//       //   state.error = null;
//       // })
//       .addCase(getIdTaskData.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.tasks = Array.isArray(action.payload.tasks)
//           ? action.payload.tasks
//           : []; // "tasks" özelliğine eriş
//         state.error = null;
//       })
//       .addCase(getIdTaskData.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.payload;
//       });
//   },
// });

// export default formSelfTaskSlice.reducer;
