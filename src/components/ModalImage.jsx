import { Image, Modal, Button } from "antd"

const ModalImage = (props) => {
  const { detailImageRef, isModalOpen, setIsModalOpen } = props

  const handleDownload = (image) => {
    // Membuat permintaan XHR untuk mengunduh gambar
    const xhr = new XMLHttpRequest()
    xhr.open("GET", image.largeImageURL, true)
    xhr.responseType = "blob"

    xhr.onload = function () {
      if (xhr.status === 200) {
        // Membuat objek Blob yang berisi gambar
        const blob = new Blob([xhr.response], { type: "image/jpeg" })

        // Membuat tautan objek URL untuk gambar
        const url = window.URL.createObjectURL(blob)

        // Membuat tautan unduhan
        const a = document.createElement("a")
        a.href = url
        a.download = "images.jpg" // Nama file yang akan diunduh
        a.style.display = "none"

        // Menambahkan tautan ke dokumen dan mengkliknya
        document.body.appendChild(a)
        a.click()

        // Menghapus tautan setelah pengguna mengunduh
        window.URL.revokeObjectURL(url)
      }
    }

    xhr.send()
  }

  return (
    <>
      <Modal
        open={isModalOpen}
        closeIcon={null}
        footer={[
          <Button key="close" onClick={() => setIsModalOpen(false)}>
            Close
          </Button>,
        ]}
      >
        {detailImageRef.current && (
          <div>
            <Image
              preview={false}
              src={detailImageRef.current.webformatURL}
              alt={detailImageRef.current.pageURL}
            />
            <Button
              type="primary"
              style={{ margin: "10px 0px" }}
              onClick={() => handleDownload(detailImageRef.current)}
            >
              Download
            </Button>
          </div>
        )}
      </Modal>
    </>
  )
}
export default ModalImage
