```vue
<template>
<p>{{ this.myProperty }}</p>
</template>

<script>
export default {
  data() {
    return {
      myProperty: "Hello World!"
    };
  },
</script>

<style scoped>
p {
  font-size: 16px;
}
</style>
```
```vue
<template>
<HelloWorld />
</template>

<script>
import HelloWorld from "@/components/HelloWorld";

export default {
  components: {
    HelloWorld
  }
}
</script>
```


```vue
axios
  .get('https://api.coindesk.com/v1/bpi/currentprice.json')
  .then(response => (console.log(response)))
```

```typescript
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const cors = require('cors')({ origin: true });
admin.initializeApp();

exports.comments = functions.https.onRequest((req, res) => {
  return cors(req, res, () => {
    if (req.method === 'POST') {
      admin.database().ref('/comments/' + req.query.id).push({ comment: req.body.comment });
      res.status(200).send('Comment added');
    }
  })
});
```

```vue
axios
  .post(
    `https://us-central1-travel-blog-31f6e.cloudfunctions.net/comments?id=` + this.blogId,
    { comment: com }
  )
```
