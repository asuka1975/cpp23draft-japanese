import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>
    <p>{"<prvalue>"} prvalue式の静的型</p>
</>

const DefnsDynamicTypePrvalue: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.dynamic.type.prvalue">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.20" title="dynamic type" link="/intro.defs/defns.dynamic.type.prvalue" linkString="defns.dynamic.type.prvalue" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.20" title="dynamic type" link="/intro.defs/defns.dynamic.type.prvalue" linkString="defns.dynamic.type.prvalue" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsDynamicTypePrvalue;