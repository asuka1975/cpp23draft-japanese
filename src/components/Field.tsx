import { FC, ReactNode } from "react";


type Props = {
    children: ReactNode
};

const Field: FC<Props> = ({ children }) => {
    return (
        <div className="px-24 pt-10">
            {children}
        </div>
    )
}

export default Field;