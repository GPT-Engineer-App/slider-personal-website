import { useState } from "react";
import { Container, VStack, Text, IconButton, Image, Box, HStack } from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const images = ["https://images.unsplash.com/photo-1617634667039-8e4cb277ab46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBsYW5kc2NhcGV8ZW58MHx8fHwxNzE3MzEzMzczfDA&ixlib=rb-4.0.3&q=80&w=1080", "https://images.unsplash.com/photo-1493134799591-2c9eed26201a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjaXR5JTIwc2t5bGluZXxlbnwwfHx8fDE3MTczMTMzNzR8MA&ixlib=rb-4.0.3&q=80&w=1080", "https://images.unsplash.com/photo-1615809265087-1416ccddd6ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHZpZXd8ZW58MHx8fHwxNzE3MzEzMzc0fDA&ixlib=rb-4.0.3&q=80&w=1080"];

const Index = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Welcome to My Personal Website</Text>
        <Box position="relative" width="100%" height="300px">
          <Image src={images[currentImageIndex]} alt="Slider Image" objectFit="cover" width="100%" height="100%" borderRadius="md" />
          <HStack position="absolute" top="50%" width="100%" justifyContent="space-between" transform="translateY(-50%)">
            <IconButton aria-label="Previous Image" icon={<FaArrowLeft />} onClick={handlePrevClick} />
            <IconButton aria-label="Next Image" icon={<FaArrowRight />} onClick={handleNextClick} />
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
