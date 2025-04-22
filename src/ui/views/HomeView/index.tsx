'use client';

import { useEffect } from 'react';

import dynamic from 'next/dynamic';

import { useLazyConvertQuery } from '@/lib/store/api/convertApi';
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
import {
  setConvertInputValue,
  setIsSubmitting,
  toggleModal,
} from '@/lib/store/slices/core.slice';
import { InputGroup, Modal } from '@/ui/components';
import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

const ConvertedHistoryList = dynamic(
  () => import('@/ui/components/ConvertedHistoryList'),
  { ssr: false },
);

const HomeView = () => {
  const dispatch = useAppDispatch();

  const { convertInputValue, convertedPdfList, isModalOpen, isSubmitting } =
    useAppSelector((state) => state.core);

  const [convert, { data, isLoading: isConverting, reset }] =
    useLazyConvertQuery();

  useEffect(() => {
    if (data) dispatch(toggleModal(true));
  }, [data, dispatch]);

  const handleChangeConvertInputValue = (value: string) => {
    dispatch(setConvertInputValue(value));
  };

  const handleSubmitConvertText = () => {
    dispatch(setIsSubmitting(true));
    convert(convertInputValue);
  };

  const handleItemClick = (value: string) => {
    convert(value);
  };

  const handleCloseModal = () => {
    dispatch(toggleModal(false));
    dispatch(setIsSubmitting(false));
    reset();
  };

  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    sidebarTabs: () => [],
  });

  return (
    <div className="flex justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center w-full">
        <div className="flex flex-col gap-[16px] justify-center items-center">
          <h1 className="text-4xl font-bold">Text 2 PDF</h1>
          <p className="text-lg">Convert text to PDF</p>
        </div>

        <InputGroup
          inputValue={convertInputValue}
          onChangeInputValue={handleChangeConvertInputValue}
          onSubmit={handleSubmitConvertText}
          isSubmitting={isSubmitting}
        />

        <ConvertedHistoryList
          convertedPdfList={convertedPdfList}
          onItemClick={handleItemClick}
          isConverting={isConverting}
        />
      </main>

      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <>
          {data && (
            <div className="flex flex-col justify-center items-center h-full max-h-[calc(90vh-112px)]">
              <Viewer
                fileUrl={data}
                plugins={[defaultLayoutPluginInstance]}
                defaultScale={1.5}
              />
            </div>
          )}
        </>
      </Modal>
    </div>
  );
};

export default HomeView;
