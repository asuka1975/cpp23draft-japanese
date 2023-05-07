import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>

</>

const DefnsDynamicTypePrvalue: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.dynamic type">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.20" title="defns.dynamic.type.prvalue" link="/intro.defs/dynamic type" linkString="dynamic type" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.20" title="defns.dynamic.type.prvalue" link="/intro.defs/dynamic type" linkString="dynamic type" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsDynamicTypePrvalue;