<template>
  <footer class="bg-gray-50 py-10 px-6 md:px-20">
    <div class="mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
      <div>
        <h2 class="text-xl font-semibold mb-4 text-gray-800">
          Thông tin liên hệ
        </h2>
        <p>
          <strong>Địa chỉ:</strong> 92 Nguyễn Trọng Tuyển, Phường 15, Phú Nhuận,
          TP.HCM
        </p>
        <p>
          <strong>Email:</strong>
          <a
            href="mailto:yenmarket@mylifecompany.com.vn"
            class="text-blue-600 hover:underline"
          >
            yenmarket@mylifecompany.com.vn
          </a>
        </p>
        <p>
          <strong>Hotline:</strong>
          <a href="tel:1900066890" class="text-blue-600 hover:underline"
            >1900 066 890</a
          >
        </p>
        <p>Mã số doanh nghiệp: 0317179405. Đăng ký lần đầu: 20/09/2008</p>
      </div>

      <div>
        <h2 class="text-xl font-semibold mb-4 text-gray-800">
          Kết nối với chúng tôi
        </h2>
        <div class="flex items-center gap-4 mb-4">
          <NuxtLink
            to="https://www.facebook.com/YenMarketVN"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button icon="pi pi-facebook" class="scale-150" />
          </NuxtLink>

          <NuxtLink
            to="https://yenmarket.vn/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button icon="pi pi-instagram" class="scale-150" />
          </NuxtLink>

          <NuxtLink
            to="https://www.youtube.com/@yenmarket1761"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button icon="pi pi-youtube" class="scale-150" />
          </NuxtLink>
        </div>
        <div>
          <NuxtImg
            src="http://bizweb.dktcdn.net/100/382/166/themes/900578/assets/logo_bct.png"
            alt="Đã thông báo Bộ Công Thương"
            loading="lazy"
            format="webp"
            class="w-40"
          />
        </div>
      </div>

      <div class="flex flex-col items-center">
        <NuxtLink to="https://yenmarket.vn/he-thong-cua-hang" target="_blank">
          <NuxtImg
            src="http://bizweb.dktcdn.net/100/382/166/themes/900578/assets/mew_store.png"
            alt="Hệ thống cửa hàng"
            class="w-56 h-56 object-contain mb-2"
            loading="lazy"
            format="webp"
          />
        </NuxtLink>
        <p class="text-center text-gray-700">Hệ thống cửa hàng</p>
      </div>
    </div>
  </footer>
</template>
