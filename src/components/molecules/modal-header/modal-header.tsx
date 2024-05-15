import { Head } from "@/components/atoms/head/head";
import { IconButton } from "@/components/molecules/icon-button/icon-button";

interface ModalHeaderProps {
  name: string;
  isUpdate: boolean;
  closeModalFunction: Function;
}

export const ModalHeader: React.FC<ModalHeaderProps> = ({
  name,
  isUpdate,
  closeModalFunction,
}) => {
  return (
    <Head className="modal__header">
      {!isUpdate && (
        <h1 id="modal-title" className="modal__header__title heading-lg">
          {`New ${name.toLowerCase()}`}
        </h1>
      )}
      {isUpdate && (
        <h1 id="modal-title" className="modal__header__title heading-lg">
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </h1>
      )}

      <IconButton
        className="modal__header__close gray-hover"
        type="button"
        aria-label="Close Modal"
        onClick={() => {
          closeModalFunction();
        }}
        src="/icons/cancel.svg"
        alt="close"
      />
    </Head>
  );
};
