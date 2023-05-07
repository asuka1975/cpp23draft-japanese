import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>

</>

const DefnsSignatureFriend: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.defns.signature.friend">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.52" title="signature" link="/intro.defs/defns.signature.friend" linkString="defns.signature.friend" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.52" title="signature" link="/intro.defs/defns.signature.friend" linkString="defns.signature.friend" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsSignatureFriend;