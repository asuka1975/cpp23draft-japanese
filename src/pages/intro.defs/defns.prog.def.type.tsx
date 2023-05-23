import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>
    <p>{"<library>"} C++標準ライブラリの一部でなく、実装により定義されていないクロージャではないクラス型・enum型、または実装が提供していないラムダ式のクロージャ型、プログラム定義された特殊化のインスタンス化</p>
    <p>[Note 1: 実装定義の型は拡張([<a href="/intro.compliance">inctro.compliance</a>])やライブラリ内部でのみ使われる型]</p>
</>

const DefnsProgDefType: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.prog.def.type">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.43" title="program-defined type" link="/intro.defs/defns.prog.def.type" linkString="defns.prog.def.type" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.43" title="program-defined type" link="/intro.defs/defns.prog.def.type" linkString="defns.prog.def.type" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsProgDefType;