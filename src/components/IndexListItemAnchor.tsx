import { Dispatch, FC, ReactNode, SetStateAction } from "react";
import { HeadingLevel } from "@/types";

type Props = {
    index: string;
    title: string;
    link: string;
    level: HeadingLevel;
    setAnchor: Dispatch<SetStateAction<string>>
};

function levelToHeading(level: HeadingLevel, children: ReactNode): ReactNode {
    switch(level) {
    case 1:
        return <h1 children={children} />
    case 2:
        return <h2 children={children} />
    case 3:
        return <h3 children={children} />
    case 4:
        return <h4 children={children} />
    case 5:
        return <h5 children={children} />
    case 6:
        return <h6 children={children} />
    default:
        const l: never = level;
    }
}

const IndexListItem: FC<Props> = ({ index, title, link, level, setAnchor }) => {
    return (
        <>
            {levelToHeading(level, 
            <span className="flex justify-end">
                <span className="w-24">
                    {index}
                </span>
                <span>
                    {title}
                </span>
                <span className="ml-auto">
                    <a href={`#${link}`} onClick={() => setAnchor(`${link}`)}>[{link}]</a>
                </span>
            </span>)}
          
        </>
    )
};

export default IndexListItem;