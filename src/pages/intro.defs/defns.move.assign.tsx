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
        <div id="defns.defns.move.assign">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.33" title="move assignment" link="/intro.defs/defns.move.assign" linkString="defns.move.assign" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.33" title="move assignment" link="/intro.defs/defns.move.assign" linkString="defns.move.assign" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsMoveAssign;