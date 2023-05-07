import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>

</>

const DefnsSignatureMemberTempl: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.signature.member.templ">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.57" title="signature" link="/intro.defs/defns.signature.member.templ" linkString="defns.signature.member.templ" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.57" title="signature" link="/intro.defs/defns.signature.member.templ" linkString="defns.signature.member.templ" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsSignatureMemberTempl;