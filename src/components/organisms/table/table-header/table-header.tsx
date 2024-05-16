import { Div, Paragraph, Section } from "@atoms";
import { IconButton, SearchInputField } from "@molecules";

interface TableHeaderCardProps {
  title: string;
  description: string;
  newElementFunction: Function;
  searchFunction: Function;
}

export const TableHeader: React.FC<TableHeaderCardProps> = ({
  title,
  description,
  newElementFunction,
  searchFunction,
}) => {
  return (
    <Section aria-label={`${title} Card`} className="application-content__card">
      <Div className="application-content__card__action-container">
        <Div className="heading-lg">{title}</Div>
        <Paragraph className="text-lg" label={description} />
        <IconButton
          className="btn btn--secondary btn--secondary--icon-left gray-hover"
          type="button"
          aria-label={`New ${title.slice(0, -1)}`}
          onClick={() => newElementFunction()}
          src="/icons/plus.svg"
          alt="add"
          label={`New ${title.toLowerCase().slice(0, -1)}`}
        />
      </Div>
      <Div>
        <SearchInputField title={title} searchFunction={searchFunction} />
      </Div>
    </Section>
  );
};
