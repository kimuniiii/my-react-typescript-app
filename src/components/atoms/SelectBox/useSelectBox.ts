import { useState } from 'react';

type OptionId = string;
type OptionName = string;

type SelectOption = {
  id: OptionId;
  name: OptionName;
};

type Props = {
  placeholder?: string;
  defaultOptionId?: OptionId;
  defaultOptionName?: OptionName;
  optionsList: SelectOption[];
  setValueResult?: (value: string) => void;
};

export const useSelectBox = ({
  placeholder = '項目を選択してください',
  defaultOptionId = '',
  defaultOptionName = '-',
  optionsList,
  setValueResult,
}: Props) => {
  const [showOptionList, setShowOptionList] = useState(false);
  const [selectedOptionId, setSelectedOptionId] = useState<OptionId>(
    defaultOptionId,
  );

  /**
   * OptionListを表示させるイベントハンドラ
   *
   */
  const handleChange = () => {
    setShowOptionList((prev) => !prev);
  };

  /**
   * OptionListを非表示にするイベントハンドラ
   *
   * @param {SelectOption['id']} optionId
   * @param {SelectOption['name']} optionName
   */
  const handleClickOnOption = (
    optionId: SelectOption['id'],
    optionName: SelectOption['name'],
  ) => {
    setSelectedOptionId(optionId);
    setShowOptionList((prev) => !prev);

    if (setValueResult !== undefined) {
      setValueResult(optionName);
    }
  };

  // find : 提供されたテスト関数を満たす配列内の最初の要素の値を返す
  const selectedOption = optionsList?.find(
    (option) => option.id === selectedOptionId,
  );

  return {
    placeholder,
    showOptionList,
    optionsList,
    selectedOption,
    handleChange,
    handleClickOnOption,
  };
};
