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
        <div id="defns.defns.signature.template.head">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.59" title="signature" link="/intro.defs/defns.signature.template.head" linkString="defns.signature.template.head" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.59" title="signature" link="/intro.defs/defns.signature.template.head" linkString="defns.signature.template.head" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsSignatureTemplateHead;