import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>
    <p>{"<library>"} メンバやパラメータ, 戻り値型として直接的に関連付けられたライブラリエンティティのグループ</p>
    <p>[Note 1: 例えば, 文字列を操作するbasic_stringテンプレートクラスや非メンバテンプレート関数はstring componentと呼ばれます. ]</p>
</>


const DefnsComponent: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.defns.component">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.12" title="component" link="/intro.defs/defns.component" linkString="defns.component" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.12" title="component" link="/intro.defs/defns.component" linkString="defns.component" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsComponent;