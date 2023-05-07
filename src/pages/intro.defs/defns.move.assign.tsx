import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>

</>

const DefnsMoveAssign: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.move assignment">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.33" title="defns.move.assign" link="/intro.defs/move assignment" linkString="move assignment" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.33" title="defns.move.assign" link="/intro.defs/move assignment" linkString="move assignment" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsMoveAssign;