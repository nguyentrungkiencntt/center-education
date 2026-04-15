import React from "react";

const Categories = () => {
    return (
        <>
           <div className="text-on-surface bg-surface font-sans selection:bg-primary/10">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl shadow-sm dark:shadow-none bg-gradient-to-b from-slate-100/50 to-transparent dark:from-slate-900/50">
        <div className="flex justify-between items-center w-full px-8 py-4 max-w-screen-2xl mx-auto">
          <div className="flex items-center gap-12">
            <span className="text-2xl font-bold tracking-tighter text-[#004152] dark:text-[#b8eaff] font-['Manrope']">
              Axiom Edu
            </span>
            <div className="hidden md:flex gap-8 items-center">
              <a className="font-['Manrope'] font-semibold tracking-tight text-[#004152] dark:text-[#b8eaff] border-b-2 border-[#004152] dark:border-[#b8eaff] pb-1" href="#">Duyệt</a>
              <a className="font-['Manrope'] font-semibold tracking-tight text-slate-500 dark:text-slate-400 hover:text-[#004152] dark:hover:text-[#b8eaff] transition-colors" href="#">Giảng viên</a>
              <a className="font-['Manrope'] font-semibold tracking-tight text-slate-500 dark:text-slate-400 hover:text-[#004152] dark:hover:text-[#b8eaff] transition-colors" href="#">Tin tức</a>
              <a className="font-['Manrope'] font-semibold tracking-tight text-slate-500 dark:text-slate-400 hover:text-[#004152] dark:hover:text-[#b8eaff] transition-colors" href="#">Thanh toán</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">search</span>
              <input 
                className="bg-surface-container-highest border-none rounded-full py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-surface-tint/20 transition-all w-64" 
                placeholder="Tìm kiếm nền tảng..." 
                type="text"
              />
            </div>
            <button className="p-2 rounded-full hover:bg-slate-50 dark:hover:bg-slate-900 transition-all duration-300">
              <span className="material-symbols-outlined text-on-surface-variant">notifications</span>
            </button>
            <button className="p-2 rounded-full hover:bg-slate-50 dark:hover:bg-slate-900 transition-all duration-300">
              <span className="material-symbols-outlined text-on-surface-variant">account_circle</span>
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-8 max-w-screen-2xl mx-auto">
        {/* Header Section */}
        <header className="mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-extrabold tracking-tighter text-primary font-['Manrope'] mb-4">Khám phá Danh mục</h1>
              <p className="text-xl text-on-surface-variant leading-relaxed">
                Tổng hợp kiến thức cho chuyên gia hiện đại. Chương trình giảng dạy của chúng tôi được cấu trúc xung quanh các lĩnh vực có tác động cao nhằm nuôi dưỡng sự tập trung, tin tưởng và phát triển chuyên môn.
              </p>
            </div>
            {/* Category Search Bar */}
            <div className="relative w-full md:w-96">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary">filter_list</span>
              <input 
                className="w-full bg-surface-container-high border-none py-4 pl-12 pr-6 rounded-xl focus:bg-surface-container-lowest focus:ring-2 focus:ring-surface-tint/20 transition-all text-on-surface font-['Manrope'] font-medium shadow-sm" 
                placeholder="Lọc danh mục..." 
                type="text"
              />
            </div>
          </div>
        </header>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {/* Mẫu 1 Card: Khoa học Máy tính */}
          <div className="group bg-surface-container-lowest rounded-xl p-8 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(25,28,29,0.05)] flex flex-col h-full border border-transparent hover:border-outline-variant/30">
            <div className="w-16 h-16 rounded-full bg-primary-fixed flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
              <span className="material-symbols-outlined text-primary text-3xl">computer</span>
            </div>
            <div className="flex-grow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold font-['Manrope'] text-primary leading-tight">Khoa học Máy tính</h3>
                <span className="text-[10px] font-bold uppercase tracking-widest text-on-primary-fixed-variant bg-primary-fixed px-2 py-1 rounded">24 KHÓA HỌC</span>
              </div>
              <p className="text-on-surface-variant mb-8 line-clamp-3">Làm chủ tư duy đằng sau kỷ nguyên số. Từ các nền tảng thuật toán đến các kiến trúc kỹ thuật phần mềm tiên tiến.</p>
            </div>
            <a className="inline-flex items-center gap-2 text-primary font-bold font-['Manrope'] group-hover:gap-4 transition-all" href="#">
              Xem các khóa học
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>

          {/* Các Card khác tương tự... (Tao rút gọn cho đỡ dài nhé, mày cứ nhân bản cái div ở trên rồi thay text vào) */}
          <div className="group bg-surface-container-lowest rounded-xl p-8 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(25,28,29,0.05)] flex flex-col h-full border border-transparent hover:border-outline-variant/30">
            <div className="w-16 h-16 rounded-full bg-secondary-fixed flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
              <span className="material-symbols-outlined text-on-secondary-fixed-variant text-3xl">chart_data</span>
            </div>
            <div className="flex-grow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold font-['Manrope'] text-primary leading-tight">Quản trị Kinh doanh</h3>
                <span className="text-[10px] font-bold uppercase tracking-widest text-on-secondary-fixed-variant bg-secondary-fixed px-2 py-1 rounded">18 KHÓA HỌC</span>
              </div>
              <p className="text-on-surface-variant mb-8 line-clamp-3">Lãnh đạo chiến lược và sự xuất sắc trong tổ chức dành cho các nhà điều hành đương đại.</p>
            </div>
            <a className="inline-flex items-center gap-2 text-primary font-bold font-['Manrope'] group-hover:gap-4 transition-all" href="#">
              Xem các khóa học <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
        </div>

        {/* Featured Section */}
        <section className="mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 bg-primary rounded-xl overflow-hidden relative min-h-[400px] flex items-center p-12">
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <img alt="không gian học tập" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" />
              </div>
              <div className="relative z-10 max-w-lg">
                <h2 className="text-4xl font-extrabold text-primary-fixed font-['Manrope'] mb-6 leading-tight">Mới: Kiến trúc Trí tuệ Nhân tạo</h2>
                <p className="text-primary-fixed/80 text-lg mb-8">Danh mục mới nhất của chúng tôi đã sẵn sàng. Khám phá 12 khóa học mới được tuyển chọn bởi các chuyên gia.</p>
                <button className="bg-tertiary text-on-tertiary px-8 py-4 rounded-lg font-bold font-['Manrope'] shadow-lg hover:opacity-90 transition-all">Khám phá danh mục mới</button>
              </div>
            </div>
            <div className="lg:col-span-4 bg-secondary-container rounded-xl p-10 flex flex-col justify-center">
              <span className="material-symbols-outlined text-primary text-5xl mb-6">school</span>
              <h3 className="text-2xl font-bold text-primary font-['Manrope'] mb-4">Không tìm thấy lĩnh vực bạn cần?</h3>
              <p className="text-on-secondary-container mb-8 leading-relaxed">Hãy đề xuất một danh mục cho lộ trình năm 2024 của chúng tôi.</p>
              <a className="inline-flex items-center gap-2 font-bold text-primary border-b-2 border-primary w-max pb-1" href="#">Yêu cầu danh mục</a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-low mt-20 pt-20 pb-12">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div>
              <span className="text-2xl font-bold tracking-tighter text-primary font-['Manrope'] block mb-6">Axiom Edu</span>
              <p className="text-on-surface-variant leading-relaxed mb-6">Hệ sinh thái giáo dục cao cấp dành cho chuyên gia.</p>
            </div>
            <div>
              <h4 className="font-bold font-['Manrope'] text-primary mb-6">Học tập</h4>
              <ul className="space-y-4 text-on-surface-variant font-medium">
                <li><a className="hover:text-primary transition-colors" href="#">Duyệt danh mục</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Lộ trình học tập</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold font-['Manrope'] text-primary mb-6">Tổ chức</h4>
              <ul className="space-y-4 text-on-surface-variant font-medium">
                <li><a className="hover:text-primary transition-colors" href="#">Triết lý</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Liên hệ</a></li>
              </ul>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/20">
              <h4 className="font-bold font-['Manrope'] text-primary mb-4">Bản tin hàng tuần</h4>
              <div className="flex gap-2">
                <input className="bg-surface-container-low border-none rounded-lg px-4 py-2 w-full text-sm" placeholder="Email" type="email" />
                <button className="bg-primary text-white p-2 rounded-lg"><span className="material-symbols-outlined">send</span></button>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-on-surface-variant">
            <p>© 2024 Hệ thống Học thuật Axiom Edu.</p>
            <div className="flex gap-8">
              <a href="#">Chính sách Bảo mật</a>
              <a href="#">Điều khoản</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
        
        </>
    );
}

export default Categories;