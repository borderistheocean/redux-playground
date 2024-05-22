import { useSelector, useDispatch } from 'react-redux'
import { setRgbValue } from './rgbPickerSlice'
import { convertToRgb255 } from '../../app/utils';

export function RgbPicker() {
  const { rValue, gValue, bValue } = useSelector((state) => state.rgbPicker);
  const dispatch = useDispatch()
  const sliders = [
    {
      label: "R", value: rValue,
    },
    {
      label: "G", value: gValue,
    },
    {
      label: "B", value: bValue,
    }
  ];

  return (
    <>
      <div style={{ display: "grid", gridTemplateColumns: "auto auto auto" }}>
        {sliders.map(function (data) {
          return (
            <div style={{ margin: "10px" }}>
              <div>{data.label}</div>
              <div><b>{convertToRgb255(data.value)}</b></div>
              <input
                type="range"
                min="0" max="10"
                value={data.value}
                onChange={(e) => dispatch(setRgbValue(({ color: data.label, value: e.target.value })))}
                step="1" />
            </div>
          )
        })}
      </div>
    </>
  );
}