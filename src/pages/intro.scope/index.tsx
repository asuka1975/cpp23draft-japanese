import Field from "@/components/Field";

export default function Scope() {
  return (
    <Field>
        <ol className="list-outside">
            <li className="list-decimal text-3xl">
                <div className="flex justify-end">
                    <div>
                        Scope
                    </div>
                    <div className="ml-auto">
                        <a href="/">[intro.scope]</a>
                    </div>
                </div>
            </li>
            <p>
                この文書はC++の実装要件を特定します. 
                はじめの要件はそれら要件が言語を実装することであるため、この文書はC++の定義も行います. 
                その他要件とはじめの要件の記述はこの文書のいたるところで見られます
            </p>
            <p>
                C++はISO/IESによるC言語を基礎とした汎用目的のプログラミング言語です. 
                C++はC言語で提供されている機能のもと、追加のデータ型、クラス、テンプレート、例外、名前空間、オペレータオーバーロード、関数オーバーロード、参照、メモリ管理オペレータ、追加のライブラリ等を含む様々機能を提供しています. 
            </p>
        </ol>
    </Field>
  )
}
