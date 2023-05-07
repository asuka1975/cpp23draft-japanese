import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>

</>

const DefnsSignatureMember: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.signature.member">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.56" title="signature" link="/intro.defs/defns.signature.member" linkString="defns.signature.member" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.56" title="signature" link="/intro.defs/defns.signature.member" linkString="defns.signature.member" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsSignatureMember;