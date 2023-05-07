import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>

</>

const DefnsReferenceable: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.referenceable">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.45" title="referenceable type" link="/intro.defs/defns.referenceable" linkString="defns.referenceable" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.45" title="referenceable type" link="/intro.defs/defns.referenceable" linkString="defns.referenceable" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsReferenceable;