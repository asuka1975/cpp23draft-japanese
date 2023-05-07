import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>

</>

const DefnsMoveConstr: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.move construction">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.34" title="defns.move.constr" link="/intro.defs/move construction" linkString="move construction" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.34" title="defns.move.constr" link="/intro.defs/move construction" linkString="move construction" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsMoveConstr;