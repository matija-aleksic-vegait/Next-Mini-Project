import { createAsyncThunk } from "@reduxjs/toolkit";
import ClientsService from "@/features/clients/services/client-service";
import CountriesService from "@/services/countries-service";

export const fetchClientsAsync = createAsyncThunk(
  "clientsSlice/fetchClients",
  async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return await ClientsService.getAllClients().then((response) => {
      return response;
    });
  }
);

export const getAllAvailableLettersAsync = createAsyncThunk(
  "clientsSlice/getAllClientsAlphabet",
  async () => {
    return await ClientsService.getAllClientsAlphabet()
      .then((response) => {
        return response;
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  }
);

export const getAllCountries = createAsyncThunk(
  "clientsSlice/getAllCountries",
  async () => {
    return await CountriesService.getAllCountries()
      .then((response) => {
        return response;
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  }
);

export const createNewClient = createAsyncThunk(
  "clientsSlice/createNewClient",
  async (data: any) => {
    return await ClientsService.createNewClient(data)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  }
);

export const updateClient = createAsyncThunk(
  "clientsSlice/updateClient",
  async (data: any) => {
    return await ClientsService.updateClient(data.data, data.id)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  }
);

export const deleteClient = createAsyncThunk(
  "clientsSlice/deleteClient",
  async (id: string) => {
    return await ClientsService.deleteClient(id)
      .then(() => {
        return id;
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  }
);
