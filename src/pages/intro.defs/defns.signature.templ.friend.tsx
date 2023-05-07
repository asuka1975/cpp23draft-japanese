import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>

</>

const DefnsSignatureTemplFriend: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.defns.signature.templ.friend">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.54" title="signature" link="/intro.defs/defns.signature.templ.friend" linkString="defns.signature.templ.friend" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.54" title="signature" link="/intro.defs/defns.signature.templ.friend" linkString="defns.signature.templ.friend" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsSignatureTemplFriend;