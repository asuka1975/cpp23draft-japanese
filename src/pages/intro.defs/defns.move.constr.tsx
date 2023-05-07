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
        <div id="defns.move.constr">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.34" title="move construction" link="/intro.defs/defns.move.constr" linkString="defns.move.constr" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.34" title="move construction" link="/intro.defs/defns.move.constr" linkString="defns.move.constr" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsMoveConstr;