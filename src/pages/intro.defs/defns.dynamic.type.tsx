import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>

</>

const DefnsDynamicType: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.defns.dynamic.type">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.19" title="dynamic type" link="/intro.defs/defns.dynamic.type" linkString="defns.dynamic.type" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.19" title="dynamic type" link="/intro.defs/defns.dynamic.type" linkString="defns.dynamic.type" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsDynamicType;