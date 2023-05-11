import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>
    <p>{"<library>"} {"<iosfwd>"}ヘッダで宣言され、ふたつのテンプレート引数をもつテンプレート</p>
    <p>[Note 1: ふたつの引数はcharTとtraitsと名付けられています。引数charTはcharacter container classであり、traitsはiostreamクラステンプレートを実装するために必要なcharTによって表現される文字型の追加的な特徴や機能を定義する型です。]</p>
</>

const DefnsIostreamTemplates: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.iostream.templates">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.29" title="iostream class templates" link="/intro.defs/defns.iostream.templates" linkString="defns.iostream.templates" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.29" title="iostream class templates" link="/intro.defs/defns.iostream.templates" linkString="defns.iostream.templates" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsIostreamTemplates;