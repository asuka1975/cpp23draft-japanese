import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>

</>

const DefnsSignatureTempl: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.defns.signature.templ">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.53" title="signature" link="/intro.defs/defns.signature.templ" linkString="defns.signature.templ" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.53" title="signature" link="/intro.defs/defns.signature.templ" linkString="defns.signature.templ" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsSignatureTempl;