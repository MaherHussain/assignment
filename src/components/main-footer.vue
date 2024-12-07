<template>
  <footer class="bg-gray-700">
    <div class="max-w-screen-xl px-4 pt-16 pb-6 mx-auto sm:px-6 lg:px-8 lg:pt-24">
      <div class="grid grid-cols-1 justify-between lg:grid-cols-3">
        <div>
          <div class="flex justify-center text-teal-300 sm:justify-start">
            <h2 class="uppercase text-3xl italic font-mono">MyBrand</h2>
          </div>

          <p class="max-w-md mx-auto mt-6 leading-relaxed text-center text-gray-400 sm:max-w-xs sm:mx-0 sm:text-left">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
            consequuntur amet culpa cum itaque neque.
          </p>
        </div>
        <div class="text-center sm:text-left">
          <p class="text-lg font-medium text-white">About Us</p>
          <nav class="mt-8">
            <ul class="space-y-4 text-sm">
              <li>
                <a class="text-white transition hover:text-white/75" href="/">
                  Company History
                </a>
              </li>
              <li>
                <a class="text-white transition hover:text-white/75" href="/">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div class="text-center sm:text-left">
          <p class="text-lg font-medium text-white">Helpful Links</p>

          <nav class="mt-8">
            <ul class="space-y-4 text-sm">
              <li>
                <a class="text-white transition hover:text-white/75" href="/"> FAQs </a>
              </li>

              <li>
                <a class="text-white transition hover:text-white/75" href="/">
                  Support
                </a>
              </li>

              <li>
                <a class="flex group justify-center sm:justify-start gap-1.5" href="/">
                  <span class="text-white transition group-hover:text-white/75">
                    Live Chat
                  </span>

                  <span class="relative flex w-2 h-2 -mr-2">
                    <span class="absolute inline-flex w-full h-full bg-teal-400 rounded-full opacity-75 animate-ping"></span>
                    <span class="relative inline-flex w-2 h-2 bg-teal-500 rounded-full"></span>
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        
      </div>

      <div class="pt-6 mt-12 border-t border-gray-800">
        <div class="text-center sm:flex sm:justify-between sm:text-left">
          <p class="text-sm text-gray-400">
            <span class="block sm:inline">All rights reserved.</span>

            <a class="inline-block text-teal-500 underline transition hover:text-teal-500/75"
                href="/">
              Terms & Conditions
            </a>

            <span>&middot;</span>

            <a class="inline-block text-teal-500 underline transition hover:text-teal-500/75"
                href="/">
              Privacy Policy
            </a>
          </p>

          <p class="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
            &copy; 2024 My Brand
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup></script>
