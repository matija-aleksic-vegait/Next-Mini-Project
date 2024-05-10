import { LoadingStateEnum } from "../../../constants/loading-state-enum";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import UserUtil from "@/features/users/utils/user-util";
import ClientUtil from "@/features/clients/utils/client-util";
import ClientsUtil from "@/features/clients/utils/client-util";
import {
  createNewClient,
  deleteClient,
  fetchClientsAsync,
  getAllAvailableLettersAsync,
  getAllCountries,
  updateClient,
} from "./clients-async-methods";

//STATE
interface ClientsState {
  loadingState: LoadingStateEnum;
  errorMessage: string;
  clients: Array<any>;
  clientsCache: Array<any>;
  allClientsCache: Array<any>;

  alphabet: Array<string>;
  activeChar: string;

  totalElementCount: number;
  pageIndex: number;

  isCreateNewModalOpen: boolean;
  isUpdateModalOpen: boolean;
  updateModalClient?: any;

  countries: Array<string>;
}

const initialState: ClientsState = {
  loadingState: LoadingStateEnum.initial,
  errorMessage: "",
  clients: [],
  clientsCache: [],
  allClientsCache: [],

  alphabet: [],
  activeChar: "",

  totalElementCount: 0,
  pageIndex: 1,

  isCreateNewModalOpen: false,
  isUpdateModalOpen: false,
  updateModalClient: null,

  countries: [],
};

//ACTIONS
const clientsSlice = createSlice({
  name: "clientsSlice",
  initialState,
  reducers: {
    alphabetFilterClients: (state, action: PayloadAction<string>) => {
      if (action.payload.toLowerCase() === state.activeChar.toLowerCase()) {
        state.activeChar = "";
        state.pageIndex = 1;
        state.clients = ClientsUtil.getSetOfClientsForPage(
          state.pageIndex,
          state.allClientsCache
        );
        state.clientsCache = state.allClientsCache;
        state.totalElementCount = state.allClientsCache.length;
      } else if (
        action.payload.toLowerCase() !== state.activeChar.toLowerCase() &&
        state.activeChar !== ""
      ) {
        state.activeChar = action.payload.toLowerCase();
        state.pageIndex = 1;

        var tempClientList = ClientsUtil.filterClientsStartWithChar(
          action.payload,
          state.allClientsCache
        );
        state.clients = ClientsUtil.getSetOfClientsForPage(
          state.pageIndex,
          tempClientList
        );

        state.clientsCache = tempClientList;
        state.totalElementCount = tempClientList.length;
      } else {
        state.activeChar = action.payload.toLowerCase();
        state.pageIndex = 1;

        var tempClientList = ClientsUtil.filterClientsStartWithChar(
          action.payload,
          state.allClientsCache
        );

        state.clients = ClientsUtil.getSetOfClientsForPage(
          state.pageIndex,
          tempClientList
        );
        state.clientsCache = tempClientList;

        state.totalElementCount = tempClientList.length;
      }
    },
    changePageIndex: (state, action: PayloadAction<number>) => {
      state.pageIndex = action.payload;
      state.clients = ClientsUtil.getSetOfClientsForPage(
        state.pageIndex,
        state.clientsCache
      );
    },
    searchClientByName: (state, action: PayloadAction<string>) => {
      state.pageIndex = 1;
      state.activeChar = "";

      var tempClientList = state.allClientsCache.filter((client) =>
        client.name.toLowerCase().includes(action.payload)
      );

      state.clients = ClientsUtil.getSetOfClientsForPage(
        state.pageIndex,
        tempClientList
      );
      state.clientsCache = tempClientList;
      state.totalElementCount = tempClientList.length;
    },
    toggleCreateNewModal: (state) => {
      state.isUpdateModalOpen = false;
      state.isCreateNewModalOpen = !state.isCreateNewModalOpen;
    },
    toggleUpdateModal: (state, action: PayloadAction<string>) => {
      state.updateModalClient = action.payload;
      state.isCreateNewModalOpen = false;
      state.isUpdateModalOpen = !state.isUpdateModalOpen;
    },
    closeModal: (state) => {
      state.isCreateNewModalOpen = false;
      state.isUpdateModalOpen = false;
    },
  },
  extraReducers: (builder) => [
    builder
      .addCase(fetchClientsAsync.pending, (state) => {
        state.loadingState = LoadingStateEnum.loading;
      })
      .addCase(
        fetchClientsAsync.fulfilled,
        (state, action: PayloadAction<any>) => {
          if (action.payload.length === 0)
            state.loadingState = LoadingStateEnum.empty;
          else state.loadingState = LoadingStateEnum.loaded;

          state.pageIndex = 1;

          state.clients = ClientsUtil.getSetOfClientsForPage(
            state.pageIndex,
            action.payload
          );

          state.clientsCache = action.payload;
          state.allClientsCache = action.payload;
          state.totalElementCount = action.payload.length;
        }
      )
      .addCase(fetchClientsAsync.rejected, (state, action: any) => {
        (state.loadingState = LoadingStateEnum.failure),
          (state.errorMessage = action.error.message),
          (state.clients = []),
          (state.clientsCache = []);
      })
      .addCase(
        getAllAvailableLettersAsync.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.alphabet = action.payload;
        }
      )
      .addCase(
        getAllCountries.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.countries = action.payload;
        }
      )
      .addCase(
        createNewClient.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.clients.push(action.payload.data);
          state.allClientsCache.push(action.payload.data);
          state.clientsCache.push(action.payload.data);
          state.totalElementCount = state.allClientsCache.length;
          state.isCreateNewModalOpen = false;
        }
      )
      .addCase(updateClient.fulfilled, (state, action: PayloadAction<any>) => {
        var foundIndex = state.clients.findIndex(
          (element) => element.id === action.payload.data.id
        );
        state.clients[foundIndex] = action.payload.data;
        foundIndex = state.allClientsCache.findIndex(
          (element) => element.id === action.payload.data.id
        );
        state.allClientsCache[foundIndex] = action.payload.data;
        foundIndex = state.clientsCache.findIndex(
          (element) => element.id === action.payload.data.id
        );
        state.clientsCache[foundIndex] = action.payload.data;
        state.totalElementCount = state.allClientsCache.length;
        state.isUpdateModalOpen = false;
      })
      .addCase(
        deleteClient.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.clients = state.clients.filter(
            (client) => client.id !== action.payload
          );
          state.allClientsCache = state.allClientsCache.filter(
            (client) => client.id !== action.payload
          );
          state.clientsCache = state.allClientsCache.filter(
            (client) => client.id !== action.payload
          );
          state.totalElementCount = state.allClientsCache.length;
          state.isUpdateModalOpen = false;
        }
      ),
  ],
});

export const {
  alphabetFilterClients,
  changePageIndex,
  searchClientByName,
  toggleCreateNewModal,
  toggleUpdateModal,
  closeModal,
} = clientsSlice.actions;

export default clientsSlice.reducer;
