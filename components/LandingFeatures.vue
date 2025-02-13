<template>
  <div class="flex flex-col gap-20">
    <!-- copy section -->
    <div
      class="flex items-center justify-between max-w-5xl mx-auto py-12 px-6 mt-28"
    >
      <div class="flex flex-col w-1/2 pr-10">
        <h3 class="text-3xl font-semibold mb-8">
          <span class="text-primary">Copy</span>
          With Ease
        </h3>
        <p class="text-gray-400 mb-12">
          Quick and easy access to copy and paste your favorite code snippets
          whenever needed.
        </p>
      </div>

      <div class="w-1/2 pl-10">
        <NuxtImg
          class="rounded-lg shadow-lg object-cover"
          src="/images/sample.webp"
          alt="Code Snippet"
          width="448"
          height="448"
        />
      </div>
    </div>

    <!-- tagging section -->
    <div class="flex items-center justify-between max-w-5xl mx-auto py-12 px-6">
      <div class="w-1/2 pr-10">
        <NuxtImg
          class="rounded-lg shadow-lg object-cover"
          src="/images/sample.webp"
          alt="Code Tags"
          width="448"
          height="448"
        />
      </div>
      <div class="flex flex-col w-1/2 pl-10">
        <h3 class="text-3xl font-semibold mb-8">
          <span class="text-primary">Tagging</span>
          System
        </h3>
        <p class="text-gray-400 mb-12">
          Organize and categorize your code snippets efficiently with our
          intuitive tagging system. Find what you need in seconds.
        </p>
      </div>
    </div>

    <!-- multi lang section -->
    <div class="flex items-center justify-between max-w-5xl mx-auto py-12 px-6">
      <div class="flex flex-col w-1/2 pr-10">
        <h3 class="text-3xl font-semibold mb-8">
          <span class="text-primary">Multi</span>
          Language Support
        </h3>
        <p class="text-gray-400 mb-12">
          Store and manage code snippets in any programming language with syntax
          highlighting and language-specific features.
        </p>
      </div>
      <div class="w-1/2 pl-10">
        <NuxtImg
          class="rounded-lg shadow-lg object-cover"
          src="/images/sample.webp"
          alt="Programming Languages"
          width="448"
          height="448"
        />
      </div>
    </div>
  </div>
</template>
