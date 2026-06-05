export default function Filters({ value, onChange, options, includeStatus = false }) {
  const update = (key, next) => onChange({ ...value, [key]: next });

  return (
    <div className="surface grid gap-3 p-4 md:grid-cols-2 xl:grid-cols-6">
      <label className="grid gap-1 text-xs font-bold uppercase tracking-wide text-slate-500 xl:col-span-2">
        Tìm kiếm
        <input className="field" value={value.query} onChange={(event) => update("query", event.target.value)} placeholder="Tên thẻ, ưu đãi, điều kiện..." />
      </label>
      <label className="grid gap-1 text-xs font-bold uppercase tracking-wide text-slate-500">
        Loại thẻ
        <select className="field" value={value.type} onChange={(event) => update("type", event.target.value)}>
          <option value="">Tất cả</option>
          {options.types.map((item) => <option key={item}>{item}</option>)}
        </select>
      </label>
      <label className="grid gap-1 text-xs font-bold uppercase tracking-wide text-slate-500">
        Hạng thẻ
        <select className="field" value={value.tier} onChange={(event) => update("tier", event.target.value)}>
          <option value="">Tất cả</option>
          {options.tiers.map((item) => <option key={item}>{item}</option>)}
        </select>
      </label>
      <label className="grid gap-1 text-xs font-bold uppercase tracking-wide text-slate-500">
        Tổ chức thẻ
        <select className="field" value={value.organization} onChange={(event) => update("organization", event.target.value)}>
          <option value="">Tất cả</option>
          {options.organizations.map((item) => <option key={item}>{item}</option>)}
        </select>
      </label>
      <label className="grid gap-1 text-xs font-bold uppercase tracking-wide text-slate-500">
        Nhóm ưu đãi
        <select className="field" value={value.group} onChange={(event) => update("group", event.target.value)}>
          <option value="">Tất cả</option>
          {options.groups.map((item) => <option key={item}>{item}</option>)}
        </select>
      </label>
      <label className="grid gap-1 text-xs font-bold uppercase tracking-wide text-slate-500">
        Nhu cầu
        <select className="field" value={value.needGroup} onChange={(event) => update("needGroup", event.target.value)}>
          <option value="">Tất cả</option>
          {options.categories.map((item) => <option key={item.id} value={item.id}>{item.name}</option>)}
        </select>
      </label>
      {includeStatus && (
        <label className="grid gap-1 text-xs font-bold uppercase tracking-wide text-slate-500">
          Trạng thái
          <select className="field" value={value.status} onChange={(event) => update("status", event.target.value)}>
            <option value="">Tất cả</option>
            <option value="active">Đang áp dụng</option>
            <option value="ending">Sắp hết hạn</option>
            <option value="ended">Đã kết thúc</option>
          </select>
        </label>
      )}
    </div>
  );
}
