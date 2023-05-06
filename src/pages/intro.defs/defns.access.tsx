import Field from "@/components/Field"
import HeadItem from "@/components/HeadItem"
import { ReactNode } from "react";

type Props = {
    inner: boolean;
};

const content: ReactNode = <>
    <p>{"<実行時の動作>"}オブジェクトの値を読み込むか書き込む</p>
    <p>[Note 1: スカラー型のglvalueのみがオブジェクトのaccessのために使えます. 
        スカラーオブジェクトの読み込みは<a href="/conv.lval">[conv.lval]</a>に, 
        スカラーオブジェクトの書き込みは<a href="/expr.ass">[expr.ass]</a>, <a href="expr.post.incr">[expr.post.incr]</a>, <a href="expr.pre.incr">[expr.pre.incr]</a>に記載されています. 
        クラス型オブジェクトに対する読み込み・書き込みの試みは典型的にはコンストラクタか代入演算子の呼び出しです. 
        そのような呼び出しはそれ自体がアクセスになるわけではありませんが, それらはスカラー型のサブオブジェクトへのアクセスが関わっています. ]</p>
</>

const DefnsAccess: React.FC<Props> = ({ inner = false }) => {
    return (
        <div id="defns.access">
        {
            inner ? 
                <div>
                    <HeadItem level={4} index="3.1" title="access" link="/intro.defs/defns.access" linkString="defns.access" />
                    {content}
                </div> :
                <Field>
                    <HeadItem level={1} index="3" title="Terms and definitions" link="/" linkString="intro.defs" />
                    <HeadItem level={4} index="3.1" title="access" link="/intro.defs/defns.access" linkString="defns.access" />
                    {content}
                </Field>
        }
        </div>
    )
}

export default DefnsAccess;