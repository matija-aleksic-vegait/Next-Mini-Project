import { AppDispatch, RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import {
  alphabetFilterClients,
  changePageIndex,
  searchClientByName,
  toggleCreateNewModal,
  toggleUpdateModal,
} from "../../redux/clients-slice";
import { useEffect } from "react";

import LoadingStateComponent from "@/components/loading-states/loading-state-component";
import { LoadingStateEnum } from "@/constants/loading-state-enum";
import EmptyStateComponent from "@/components/loading-states/empty-state-component";
import ErrorStateComponent from "@/components/loading-states/error-state-component";
import TableHeaderCard from "@/components/cards/table-header-card";
import AlphabetFilter from "@/components/table-controls/alphabet-filter";
import Pagination from "@/components/table-controls/pagination";
import {
  fetchClientsAsync,
  getAllAvailableLettersAsync,
  getAllCountries,
} from "../../redux/clients-async-methods";
import ClientCard from "../cards/client-card";
import ClientModal from "../modals/project-modal";

function ClientsTable() {
  const clients = useSelector((state: RootState) => state.clientsStore.clients);
  const loadingState = useSelector(
    (state: RootState) => state.clientsStore.loadingState
  );
  const errorMessage = useSelector(
    (state: RootState) => state.clientsStore.errorMessage
  );
  const alphabet = useSelector(
    (state: RootState) => state.clientsStore.alphabet
  );
  const pageIndex = useSelector(
    (state: RootState) => state.clientsStore.pageIndex
  );
  const totalElementCount = useSelector(
    (state: RootState) => state.clientsStore.totalElementCount
  );
  const activeChar = useSelector(
    (state: RootState) => state.clientsStore.activeChar
  );
  const isCreateNewModalOpen = useSelector(
    (state: RootState) => state.clientsStore.isCreateNewModalOpen
  );
  const isUpdateModalOpen = useSelector(
    (state: RootState) => state.clientsStore.isUpdateModalOpen
  );
  const updateClient = useSelector(
    (state: RootState) => state.clientsStore.updateModalClient
  );

  var title = "Clients";
  var description =
    "Here, you have full control over your client database, empowering you to efficiently organize and maintain your clients.";

  const newClientModal = () => {
    dispatch(toggleCreateNewModal());
  };

  const updateClientModal = (client: any) => {
    dispatch(toggleUpdateModal(client));
  };

  const searchClients = (searchString: string) => {
    dispatch(searchClientByName(searchString));
  };

  const getAllAvailableLetters = () => {
    dispatch(getAllAvailableLettersAsync());
  };

  const selectActiveLetter = (char: string) => {
    dispatch(alphabetFilterClients(char));
  };

  const changePageIdx = (pageIndex: number) => {
    dispatch(changePageIndex(pageIndex));
  };

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchClientsAsync());
    dispatch(getAllCountries());
  }, []);

  if (loadingState === LoadingStateEnum.loading) return LoadingStateComponent();
  if (loadingState === LoadingStateEnum.empty)
    return EmptyStateComponent({ entitiesName: title });
  if (loadingState === LoadingStateEnum.failure)
    return ErrorStateComponent({ errorMessage: errorMessage });
  return (
    <>
      <TableHeaderCard
        title={title}
        description={description}
        newElementFunction={newClientModal}
        searchFunction={searchClients}
      />
      <AlphabetFilter
        activeLetter={activeChar}
        alphabetSelector={alphabet}
        getAllAlphabetLettersFunction={getAllAvailableLetters}
        alphabetFilterFunction={selectActiveLetter}
      />
      <section aria-label={`${title} List`}>
        <ul role="list" className="application-content__list">
          {clients &&
            clients.map((client: any) => (
              <div key={client.id} onClick={() => updateClientModal(client)}>
                <ClientCard client={client} />
              </div>
            ))}
        </ul>
      </section>

      <Pagination
        pageIndex={pageIndex}
        totalElementCount={totalElementCount}
        changePageIndexFunction={changePageIdx}
      />

      {isCreateNewModalOpen && (
        <ClientModal
          isOpenModal={isCreateNewModalOpen}
          isUpdate={false}
          client={undefined}
        />
      )}

      {isUpdateModalOpen && (
        <ClientModal
          isOpenModal={isUpdateModalOpen}
          isUpdate={true}
          client={updateClient}
        />
      )}
    </>
  );
}

export default ClientsTable;
