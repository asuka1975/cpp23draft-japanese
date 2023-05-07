import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>
    <p>実装の出力メッセージのうち実装定義のサブセットに属するメッセージ</p>
</>

const DefnsDiagnostic: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.defns.diagnostic">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.17" title="diagnostic message" link="/intro.defs/defns.diagnostic" linkString="defns.diagnostic" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.17" title="diagnostic message" link="/intro.defs/defns.diagnostic" linkString="defns.diagnostic" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsDiagnostic;