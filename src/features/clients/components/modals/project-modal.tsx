import { closeModal } from "@/features/clients/redux/clients-slice";
import { AppDispatch, RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import ClientForm from "../forms/client-form";
import { deleteClient } from "../../redux/clients-async-methods";

function ClientModal({
  isOpenModal,
  isUpdate,
  client,
}: {
  isOpenModal: boolean;
  isUpdate: boolean;
  client?: any;
}) {
  const dispatch = useDispatch<AppDispatch>();

  const countries = useSelector(
    (state: RootState) => state.clientsStore.countries
  );

  const closeModalFunction = async () => {
    dispatch(closeModal());
  };

  const deleteClientFunction = async () => {
    dispatch(deleteClient(client.id));
  };

  return (
    <>
      {isOpenModal && (
        <>
          <div className="modal-wrapper">
            <div
              id="create-client-modal-overlay"
              className="modal-overlay modal-overlay--background-shadow"
              onClick={() => {
                closeModalFunction();
              }}
            ></div>
            <div
              className="modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
            >
              <ClientModalHeader
                closeModalFunction={closeModalFunction}
                isUpdate={isUpdate}
              />

              <ClientForm
                isUpdate={isUpdate}
                client={client}
                countries={countries}
                deleteClientFunction={deleteClientFunction}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}
export default ClientModal;

function ClientModalHeader({
  isUpdate,
  closeModalFunction,
}: {
  isUpdate: boolean;
  closeModalFunction: any;
}) {
  return (
    <header className="modal__header">
      {!isUpdate && (
        <h1 id="modal-title" className="modal__header__title heading-lg">
          New client
        </h1>
      )}
      {isUpdate && (
        <h1 id="modal-title" className="modal__header__title heading-lg">
          Client
        </h1>
      )}

      <button
        className="modal__header__close gray-hover"
        type="button"
        aria-label="Close Modal"
        onClick={() => {
          closeModalFunction();
        }}
      >
        <img src="/icons/cancel.svg" alt="close" />
      </button>
    </header>
  );
}
