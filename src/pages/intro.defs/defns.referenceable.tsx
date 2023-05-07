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
        <div id="defns.referenceable type">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.45" title="defns.referenceable" link="/intro.defs/referenceable type" linkString="referenceable type" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.45" title="defns.referenceable" link="/intro.defs/referenceable type" linkString="referenceable type" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsReferenceable;