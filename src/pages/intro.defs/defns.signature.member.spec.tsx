import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>

</>

const DefnsSignatureMemberSpec: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.signature">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.58" title="defns.signature.member.spec" link="/intro.defs/signature" linkString="signature" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.58" title="defns.signature.member.spec" link="/intro.defs/signature" linkString="signature" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsSignatureMemberSpec;