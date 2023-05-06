import { FC } from "react";

type IndexItem = {
    title: string;
    link: string;
};

type IndexTree = (IndexItem | Array<IndexTree>)[]

type Props = {
    title: string;
    link: string;
    accordion: IndexTree;
};

const AccordionIndexListItem: FC<Props> = ({ title, link }) => {
    return (
        <li className="list-decimal">
          <div className="flex justify-end">
              <div>
                  {title}
              </div>
              <div className="ml-auto">
                  <a href={`/${link}`}>[{link}]</a>
              </div>
          </div>
        </li>
    )
}