import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>

</>

const DefnsSignatureTemplateHead: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.signature">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.59" title="defns.signature.template.head" link="/intro.defs/signature" linkString="signature" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.59" title="defns.signature.template.head" link="/intro.defs/signature" linkString="signature" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsSignatureTemplateHead;