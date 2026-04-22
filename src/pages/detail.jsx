function Detail() {
  const course = {
    title: "Khóa học Lập trình Web Fullstack",
    description:
      "Học từ cơ bản đến nâng cao, xây dựng website hoàn chỉnh với ReactJS, NodeJS và dự án thực tế.",

    teacher: "Nguyễn Văn A",
    duration: "6 tháng",
    lessons: 48,
    students: 1200,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <section
        className="relative h-[380px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-slate-900/75"></div>

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4">
          <div className="max-w-3xl text-white">
            <p className="mb-3 text-sm text-slate-200">
              Trang chủ / Khóa học / Chi tiết khóa học
            </p>

            <span className="mb-4 inline-block rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold">
              Khóa học nổi bật
            </span>

            <h1 className="mb-4 text-4xl font-bold leading-tight">
              {course.title}
            </h1>

            <p className="mb-6 text-base leading-7 text-slate-200">
              {course.description}
            </p>

            <div className="flex flex-wrap gap-4 text-sm md:text-base">
              <span>⭐ {course.rating}/5</span>
              <span>👨‍🎓 {course.students} học viên</span>
              <span>📚 {course.lessons} buổi học</span>
              <span>⏱ {course.duration}</span>
            </div>
          </div>
        </div>
      </section>

      <main className="relative z-20 mx-auto -mt-16 grid max-w-7xl grid-cols-1 gap-6 px-4 pb-10 lg:grid-cols-3">
        <section className="lg:col-span-2">
          <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
            <img
              src={course.image}
              alt={course.title}
              className="h-[360px] w-full object-cover"
            />
          </div>

          <div className="mt-6 rounded-2xl bg-white p-6 shadow-lg">
            <h2 className="mb-4 text-2xl font-bold text-blue-900">
              Giới thiệu khóa học
            </h2>
            <p className="leading-7 text-slate-600">{course.description}</p>
          </div>

          <div className="mt-6 rounded-2xl bg-white p-6 shadow-lg">
            <h2 className="mb-4 text-2xl font-bold text-blue-900">
              Bạn sẽ học được gì?
            </h2>
            <ul className="space-y-3 text-slate-600">
              <li>• Nắm vững HTML, CSS, JavaScript</li>
              <li>• Xây dựng giao diện với ReactJS</li>
              <li>• Tạo API với NodeJS và Express</li>
              <li>• Kết nối cơ sở dữ liệu và triển khai dự án</li>
              <li>• Hoàn thiện website thực tế cuối khóa</li>
            </ul>
          </div>

          <div className="mt-6 rounded-2xl bg-white p-6 shadow-lg">
            <h2 className="mb-4 text-2xl font-bold text-blue-900">
              Nội dung khóa học
            </h2>

            <div className="space-y-4">
              {/* ITEM */}
              <div className="group cursor-pointer rounded-xl border border-slate-200 bg-white p-4 transition duration-300 hover:-translate-y-1 hover:bg-blue-50 hover:shadow-md">
                <h3 className="font-semibold text-slate-800 transition group-hover:text-blue-600">
                  Buổi 1 - 5
                </h3>
                <p className="mt-1 text-slate-500 transition group-hover:text-slate-700">
                  HTML, CSS, xây dựng bố cục giao diện cơ bản
                </p>
              </div>

              <div className="group cursor-pointer rounded-xl border border-slate-200 bg-white p-4 transition duration-300 hover:-translate-y-1 hover:bg-blue-50 hover:shadow-md">
                <h3 className="font-semibold text-slate-800 transition group-hover:text-blue-600">
                  Buổi 6 - 12
                </h3>
                <p className="mt-1 text-slate-500 transition group-hover:text-slate-700">
                  JavaScript cơ bản đến nâng cao
                </p>
              </div>

              <div className="group cursor-pointer rounded-xl border border-slate-200 bg-white p-4 transition duration-300 hover:-translate-y-1 hover:bg-blue-50 hover:shadow-md">
                <h3 className="font-semibold text-slate-800 transition group-hover:text-blue-600">
                  Buổi 13 - 25
                </h3>
                <p className="mt-1 text-slate-500 transition group-hover:text-slate-700">
                  ReactJS, component, props, state, routing
                </p>
              </div>

              <div className="group cursor-pointer rounded-xl border border-slate-200 bg-white p-4 transition duration-300 hover:-translate-y-1 hover:bg-blue-50 hover:shadow-md">
                <h3 className="font-semibold text-slate-800 transition group-hover:text-blue-600">
                  Buổi 26 - 48
                </h3>
                <p className="mt-1 text-slate-500 transition group-hover:text-slate-700">
                  NodeJS, Express, MongoDB và project thực tế
                </p>
              </div>
            </div>
          </div>
        </section>

        <aside className="space-y-6">
          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <h3 className="mb-4 text-2xl font-bold text-blue-900">
              Đăng ký khóa học
            </h3>

            <div className="mb-5 flex items-center gap-3">
              <span className="text-3xl font-bold text-red-500">
                {course.price}
              </span>
              <span className="text-lg text-slate-400 line-through">
                {course.oldPrice}
              </span>
            </div>

            <button className="mb-3 w-full rounded-xl bg-blue-900 px-4 py-3 font-semibold text-white transition hover:bg-blue-800">
              Đăng ký ngay
            </button>

            <button className="w-full rounded-xl border-2 border-blue-900 px-4 py-3 font-semibold text-blue-900 transition hover:bg-blue-900 hover:text-white">
              Nhận tư vấn
            </button>

            <div className="mt-5 space-y-3 border-t pt-5 text-sm text-slate-600">
              <div className="flex justify-between">
                <span>Giảng viên</span>
                <strong>{course.teacher}</strong>
              </div>
              <div className="flex justify-between">
                <span>Thời lượng</span>
                <strong>{course.duration}</strong>
              </div>
              <div className="flex justify-between">
                <span>Số buổi</span>
                <strong>{course.lessons}</strong>
              </div>
              <div className="flex justify-between">
                <span>Học viên</span>
                <strong>{course.students}</strong>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <h3 className="mb-4 text-xl font-bold text-blue-900">
              Giảng viên phụ trách
            </h3>

            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-900 text-xl font-bold text-white">
                A
              </div>

              <div>
                <h4 className="font-semibold text-slate-800">
                  {course.teacher}
                </h4>
                <p className="text-sm text-slate-500">
                  Chuyên gia đào tạo lập trình Web tại EduTech
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <h3 className="mb-4 text-xl font-bold text-blue-900">Lịch học</h3>
            <ul className="space-y-3 text-slate-600">
              <li>• Thứ 2 - Thứ 4 - Thứ 6</li>
              <li>• 18:30 - 20:30</li>
              <li>• Khai giảng: 20/04/2026</li>
            </ul>
          </div>
        </aside>
      </main>
    </div>
  );
}

export default Detail;
