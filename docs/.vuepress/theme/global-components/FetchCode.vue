<template>
  <div class="language-go">
    <pre class="language-go">
  <code class="language-go">
        {{ code }}
  </code>
  </pre>
  </div>
</template>

<script>
// It's supposed to fetch files content from repo using GitHub API:
// e.g. https://api.github.com/repos/iotexproject/iotex-antenna-go/contents/examples/contract/contract.go
// Props:
//   'repo-path' (e.g. iotexproject/iotex-antenna)
//   'file-path' (e.g. examples/contract/contract.go)
//   The url built is: https://api.github.com/repos/<repo-path>/contents/<file-path>

export default {
  name: "FetchCode",

  props: ["repoPath", "filePath"],
  data() {
    return {
      code: ""
    };
  },

  async created() {
    // GET request using fetch with async/await
    const apiUrl =
      "https://api.github.com/repos/" +
      this.repoPath +
      "/contents/" +
      this.filePath;
    const response = await fetch(apiUrl);
    const data = await response.json();
    let text = atob(data.content);
    text = text.replace(/[\u00A0-\u9999<>\&]/gim, function(i) {
      return "&#" + i.charCodeAt(0) + ";";
    });
    console.log("** " + text);
    this.code = text;
  }
};
</script>
