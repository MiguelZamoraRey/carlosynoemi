function GMap({ isMobile }: { isMobile: boolean }) {
  return (
    <div className="flex flex-col gap-2 justify-center items-center relative min-h-[15em] border-[#d8d5be] rounded-lg min-w-[50%] p-4">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3017.140607410612!2d-3.8923927999999997!3d40.8687884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4167c3946893d7%3A0x3cb76477588d432b!2sFinca%20Prados%20Riveros%20(Casa%20El%20Palero)!5e0!3m2!1ses!2ses!4v1744362204772!5m2!1ses!2ses"
        width={isMobile ? '300' : '650'}
        height={isMobile ? '300' : '400'}
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default GMap;
