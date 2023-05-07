import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>

</>

const DefnsDiagnostic: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.diagnostic message">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.17" title="defns.diagnostic" link="/intro.defs/diagnostic message" linkString="diagnostic message" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.17" title="defns.diagnostic" link="/intro.defs/diagnostic message" linkString="diagnostic message" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsDiagnostic;