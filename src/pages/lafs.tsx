import { useState } from 'preact/hooks'
import React, { useEffect } from 'react'
import tw from 'twin.macro'
import { BackButton, LafShelf, Modal } from '../components'
import { FixedLayout } from '../layouts'

// TODO: このページを完成させる
const Lafs: React.FC = () => {
  const [Modalstate, setModalstate] = useState<boolean>(false)
  const [Modalimg, setModalimg] = useState<string>()

  useEffect(() => {
    // 表示されたときに、バックエンドからデータを取得してstateにぶちこむ
  }, [])

  return (
    <FixedLayout
      title="落とし物一覧"
      topComponent={
        <>
          <BackButton />
        </>
      }
    >
      <Modal active = {Modalstate}>
        <div tw="w-1/2 h-3/4 bg-lightgrey2 rounded-xl">
          <div tw="w-full mt-14 mb-6 text-center text-primarydeep
           text-3xl font-semibold underline">この落とし物を受け取りますか?</div>
          <div tw="w-1/2 m-0 m-auto"><img tw="rounded-xl" alt="落とし物の画像" src={Modalimg}/></div>
          <div tw="flex">
          </div>
        </div>
      </Modal>

      <LafShelf
        name="教科書・のーと・ファイル"
        color="#FF00FF"
        imgurl="http://free-photo.net/photo_img/081241411241.jpg"
        onClick={() => {
          setModalstate(true)
          setModalimg('http://free-photo.net/photo_img/081241411241.jpg')
        }}/>
    </FixedLayout>
  )
}

export {
  Lafs
}
